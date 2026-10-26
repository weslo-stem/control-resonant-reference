import os

directory = os.fsencode('C:\\Users\\wlowe\\control-resonant-reference\\docs\\icons')

for subdir, dirs, files in os.walk(directory):
    for file in files:
        print(os.path.join(subdir, file))