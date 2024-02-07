from fastapi import FastAPI
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
from src.db import User,Token, Result, engine
from uuid import uuid4

app = FastAPI()

app.mount("/static", StaticFiles(directory="static", html=True), name="static")

session = Session(engine)


def search_user(login):
    try:
        return session.query(User).filter_by(login="login").one()
    except ():
        return None


def check_answers(answers):
    counter = 0
    counter += (int(answers['iam']) == 21)
    counter += (int(answers['and_this']) == 2)
    counter += (int(answers['gun_weight']) == 150)
    counter += (int(answers['bullet_cost']) == 4)
    counter += (int(answers['it_fires']) == 2)
    counter += (int(answers['fire_speed']) == 10)
    counter += (int(answers['time_cost']) == 4)
    counter += (int(answers['fire_this']) == 2)
    counter += (int(answers['fire_time']) == 11)
    counter += (int(answers['omg']) == 2)
    counter += (int(answers['who']) == 2)
    counter += (int(answers['who_touched_my_gun']) == 4)
    counter += (int(answers['laugh']) == 55)

    try:
        user = session.query(Token).filter_by(token=answers["token"]).one()
        try:
            user = session.query(Result).filter_by(login=user["login"]).one()

        except ():
            user_result = Result()

    except ():
        return FileResponse("static/html/teapot.html")


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
        return JSONResponse(status_code=400, content={'error': 'incorrect username'})
    elif check_user['password'] != user['password']:
        return JSONResponse(status_code=401, content={'error': 'incorrect password'})
    else:
        return JSONResponse(content={token: token}, status_code=200)


@app.post("/users/sing_up/")
async def sing_up_user(user: dict):
    check_user = search_user(user['login'])
    if check_user is None:
        session.add(user)
        session.commit()
    else:
        return JSONResponse(status_code=401, content={'error': 'name already used'})


"""
@app.post("/users/delete/{user_id}")
async def delete_user(user_id: int):
    try:
        session.query(User).filter_by(id=id).delete()
        session.commit()
"""