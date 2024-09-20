from fastapi import FastAPI

app = FastAPI()

@app.get("/api/data")
def read_data():
    return {"message": "Hello from FastAPI!"}

