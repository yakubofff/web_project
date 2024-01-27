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
        return f"{self.id} {self.login}"

    def __repr__(self) -> str:
        return f"{self.id} {self.login}"


class Address(Base):
    __tablename__ = "address_table"

    id: Mapped[int] = mapped_column(primary_key=True)

    user: Mapped["User"] = relationship(back_populates="addresses")

    user_id: Mapped[int] = mapped_column(ForeignKey("user_table.id"))

    def __str__(self) -> str:
        return f"{self.id}"

    def __repr__(self) -> str:
        return f"{self.id}"


engine = create_engine("sqlite:///test.db")

if __name__ == "__main__":
    Base.metadata.create_all(engine)