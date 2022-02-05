import os

dir_path = os.path.dirname(__file__)
# os.chdir(f"{dir_path}\\src\\")
os.chdir(f"{dir_path}")

# os.system(f"""tsc *.ts --watch""")
os.system(f"""tsc -w""")
