from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from enum import Enum
from datetime import datetime


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Status(Enum):
    SUBMITTED="submitted"
    PROCESSING="processing"
    COMPLETE="complete"
    
class Case(BaseModel):
    id: str
    created_at: datetime
    status: str

id = 0
cases = {
    # case_{id}: Case(id="case_{id}", created_at=datetime.now(), status=Status.SUBMITTED),
}

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/cases/{case_id}")
def query_case_by_id(case_id: str):
    if case_id not in cases:
        HTTPException(status_code=404, detail=f"Case with {case_id=} does not exist.")
    
    return cases[case_id]

@app.get("/cases")
def get_all_cases() -> dict[str, dict[int, Case]]:
    return { "cases": cases }

@app.post("/cases")
def create_case() -> dict[str, str]:
    case_id = f"case_{id}"
    cases[case_id] = Case(id = case_id, created_at=datetime.now(), status=Status.SUBMITTED)
    response = { "case_id": case_id }
    id += 1
    
    return response
    