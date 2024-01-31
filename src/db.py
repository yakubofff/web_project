from sqlalchemy import ForeignKey, String
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from typing import List, Optional

from sqlalchemy import create_engine


class Base(DeclarativeBase):
    pass


class User(Base):
    __tablename__ = "user_table"

    id: Mapped[int] = mapped_column(primary_key=True)
    login: Mapped[str] = mapped_column(String(20))
    password: Mapped[str] = mapped_column(String(20))

    def __str__(self) -> str:
        return f"{self.id} {self.login} {self.password}"

    def __repr__(self) -> str:
        return f"{self.id} {self.login} {self.password}"


class Tokens(Base):
    __tablename__ = "token_table"

    id: Mapped[int] = mapped_column(primary_key=True)
    login: Mapped[str] = mapped_column(String(20))
    token: Mapped[str] = mapped_column(String(20))

    def __str__(self) -> str:
        return f"{self.id} {self.login} {self.token}"

    def __repr__(self) -> str:
        return f"{self.id} {self.login} {self.token}"


class Results(Base):
    __tablename__ = "result_table"

    id: Mapped[int] = mapped_column(primary_key=True)
    login: Mapped[str] = mapped_column(String(20))
    score: Mapped[int] = mapped_column()


engine = create_engine("sqlite:///test.db")

if __name__ == "__main__":
    Base.metadata.create_all(engine)
