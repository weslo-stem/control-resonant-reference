import os

directory = os.fsencode('C:\\Users\\weslo\\OneDrive\\Desktop\\control-resonant-reference\\docs\\images\\vendors')

for subdir, dirs, files in os.walk(directory):
    for file in files:
        print(os.path.join(subdir, file))