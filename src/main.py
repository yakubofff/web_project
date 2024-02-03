from fastapi import FastAPI
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
from src.db import User, engine
from uuid import uuid4

app = FastAPI()

app.mount("/static", StaticFiles(directory="static", html=True), name="static")

session = Session(engine)


def search_user(login):
    try:
        return session.query(User).filter_by(login="login").one()
    except ():
        return None


@app.get("/")
async def home():
    return FileResponse("static/html/index.html")


@app.get("/hello/")
async def hello():
    return FileResponse("static/html/index.html")


@app.post("/users/new/")
async def create_user(user: dict):
    print(user['login'], user['password'])

    user = User(
        login=user['login'],
        password=user['password'],
    )
    session.add(user)
    session.commit()
    user_id = user.id

    return JSONResponse(content={"user_id": user_id}, status_code=200)


@app.post("/users/login/")
async def login_user(user: dict):
    token = str(uuid4())
    check_user = search_user(user['login'])

    if check_user is None:
        return JSONResponse(status_code=200)
    elif check_user['password'] != user['password']:
        return JSONResponse(status_code=200)
    else:
        return JSONResponse(content={token: token}, status_code=200)


@app.post("/users/sing_up/")
async def sing_up_user(user: dict):
    check_user = search_user(user['login'])
    if check_user is None:
        session.add(user)
        session.commit()
    else:
        return JSONResponse(status_code=200)

"""
@app.post("/users/delete/{user_id}")
async def delete_user(user_id: int):
    try:
        session.query(User).filter_by(id=id).delete()
        session.commit()
"""