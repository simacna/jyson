f = open('nobel_winners.csv', 'w+')
print f
cols = nobel_winners[0].keys()
# cols.sort() 

# with open('data/nobel.csv', 'w') as f:
#     f.write(','.join(cols) + '\n') 

#     for o in nobel_winners:
#         row = [str(o[col]) for col in cols]
#         f.write(','.join(row) + '\n')