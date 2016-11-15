# f = open('data/nobel_winners.json', 'r')
# nobel_winners = f[0]
# cols = nobel_winners[0].keys()


# with open('data/nobel.csv', 'w') as f:
#     f.write(','.join(cols) + '\n') 

#     for o in nobel_winners:
#         row = [str(o[col]) for col in cols]
#         f.write(','.join(row) + '\n')

# import ast
# with open('data/nobel_winners.csv', 'r') as myfile:
#     data = myfile.read().replace('\n', '')
# data_dict = ast.literal_eval(data)
# # cols =  data_dict[0].keys()

# print(data_dict)

import nw
# from nw import *
"""using import nw doesn't allow for accessing the nobel list vs
using explicit import from nw import * gives access to the variable


"""

print(nw.nobel())