import os
from dotenv import load_dotenv
from supabase import create_client, Client

# Load backend/.env
load_dotenv(os.path.join(os.path.dirname(__file__), "..", ".env"))

def get_supabase_client() -> Client:
    url = os.getenv("SUPABASE_URL")
    service_role_key = os.getenv("SUPABASE_SERVICE_ROLE_KEY")
    if not url or not service_role_key:
        raise RuntimeError("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in backend/.env")
    return create_client(url, service_role_key)


