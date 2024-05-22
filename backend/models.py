from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, DateTime, Enum as SQLAlchemyEnum
from database import Base
from enum import Enum

class Status(Enum):
    SUBMITTED = "submitted"
    PROCESSING = "processing"
    COMPLETE = "complete"

class Cases(Base):
    __tablename__ = 'cases'
    
    id = Column(Integer, primary_key=True, index=True)
    created_at = Column(DateTime, default=datetime.now(timezone.utc))
    status = Column(SQLAlchemyEnum(Status), index = True)