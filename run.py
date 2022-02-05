import os

dir_path = os.path.dirname(__file__)
os.chdir(f"{dir_path}\\src\\")

os.system(f"""tsc app.ts --watch""")
