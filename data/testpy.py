import csv

file = open("test.csv", "r")
data = list(csv.reader(file, delimiter=","))
file.close()



print([row[4] for row in data])
