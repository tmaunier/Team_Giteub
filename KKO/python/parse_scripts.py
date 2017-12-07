import json

from os import listdir
from os.path import isfile, join

import sys

# get path to parse
PATH = str(sys.argv[1])
files = [f for f in listdir(PATH) if isfile(join(PATH, f))]

id_scripts = dict()
for current_file in files:
    print(current_file)
    with open(PATH+current_file,"r") as fp:
        data = fp.read().split("\n", 5)
        
        language = data[0][2:].rstrip()
        function = data[1][2:].rstrip()
        consigne = data[2][2:].rstrip()
        code = data[3][2:].rstrip()
        img_path = data[4][2:].rstrip()

    try:
        try:
            id_scripts[language][function].append([consigne, code, img_path])
        except KeyError:
            id_scripts[language][function] = [consigne, code, img_path]
    except KeyError:
        id_scripts[language] = {function : [[consigne, code, img_path]]}
    

json.dump(id_scripts, open(PATH+"tmp.json", "w"), indent = 4)
