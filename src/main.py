from fastapi import FastAPI
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
from src.db import User, Address, engine

app = FastAPI()

app.mount("/static", StaticFiles(directory="static", html=True), name="static")

session = Session(engine)


@app.get("/")
async def home():
    return FileResponse("static/html/index.html")


@app.get("/hello/")
async def hello():
    return FileResponse("static/html/hello.html")


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


@app.post("/users/delete/{user_id}")
async def delete_user(user_id: int):

    session.query(User).filter_by(id=id).delete()
    session.commit()
