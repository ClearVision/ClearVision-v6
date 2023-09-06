import glob
import os
from pathlib import Path

#paths = glob.glob('C:/Users/Nyx/Desktop/ClearVision-v6/src/**/*.scss', recursive=True)
#print(paths)
class_file = open('fail.txt', 'r')
dp = class_file.read()
da = dp.split()

#paths.remove('C:/Users/Nyx/Desktop/ClearVision-v6/src\\members\\tags.scss')

fail = []
file = Path('./test/main.css')

for cl in da:
    cflag = False
    #for file in paths:
    print(f"Checking {cl} in {file}")
    f = open(file, 'r')
    for line in f:
        if cl in line:
            cflag = True 
    if cflag == True:
        fail.append(cl)

with open('fail_in_theme.txt','w') as out:
    out.write('\n'.join(str(cl) for cl in fail))
    