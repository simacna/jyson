# f = open('data/nobel_winners.json', 'r')

# cols = nobel_winners[0].keys()


# with open('data/nobel.csv', 'w') as f:
#     f.write(','.join(cols) + '\n') 

#     for o in nobel_winners:
#         row = [str(o[col]) for col in cols]
#         f.write(','.join(row) + '\n')

import ast
with open('data/nobel_winners.csv', 'r') as myfile:
    data = myfile.read().replace('\n', '')
data_dict = ast.literal_eval(data)
# cols =  data_dict[0].keys()

print(data_dict)
