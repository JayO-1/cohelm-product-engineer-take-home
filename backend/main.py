from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Annotated
from enum import Enum
from datetime import datetime, timezone
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session


app = FastAPI()
models.Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/cases")
async def get_all_cases(db: db_dependency):
    result = db.query(models.Cases).all()
    return result

@app.get("/cases/{case_id}")
async def query_case_by_id(case_id: int, db: db_dependency):
    result = db.query(models.Cases).filter(models.Cases.id == case_id).first()
    if not result:
        raise HTTPException(status_code=404, detail=f"Case with {case_id=} does not exist.")
    
    return result

@app.post("/cases")
async def create_case(db: db_dependency):
    db_case = models.Cases(created_at=datetime.now(timezone.utc), status=models.Status.SUBMITTED)
    db.add(db_case)
    db.commit()
    db.refresh(db_case)
    return { "case_id": db_case.id }
    