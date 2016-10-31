import logging
student_data = [
    {'name': 'Bob', 'id':0, 'scores':[68, 75, 56, 81]},
    {'name': 'Alice', 'id':1,  'scores':[75, 90, 64, 88]},
    {'name': 'Carol', 'id':2, 'scores':[59, 74, 71, 68]},
    {'name': 'Dan', 'id':3, 'scores':[64, 58, 53, 62]},
]

# print student_data[0]['name']
def process_student_data(data, pass_threshold=60, merit_threshold=75):
  """ Perform some basic stats on student data. """

  for sdata in data:
    av = sum(sdata['scores'])/float(len(sdata['scores']))
    sdata['average'] = av

    if av > merit_threshold:
      sdata['assessment'] = 'passed with merit'
    elif av > pass_threshold:
      sdata['assessment'] = 'passed'
    else:
      sdata['assessment'] = 'failed'

    print("%s's (id: %d) final assessment is: %s" %(
      sdata['name'], sdata['id'], sdata['assessment'].upper()))

logger = logging.getLogger(__name__)
logger.debug("Some useful debugging output")
logger.info("Some general information")

logging.basicConfig(level=logging.DEBUG)
# if __name__ == '__main__':
#   pass
  # process_student_data(student_data)


#why is object being passed below
class Citizen(object):
  def __init__(self, name, country):
    self.name = name
    self.country = country

  def print_details(self):
    print('Citizen %s from %s' % (self.name, self.country))

# class Citizen():
#   def __init__(self, name, country):
#     self.name = name
#     self.country = country

#   def print_details(self):
#     print('Citizen %s from %s' % (self.name, self.country))

c = Citizen('Sina', 'US')
# c.print_details() #output is same as if 'object' passed into
#citizen class..? double check this

class Winner(Citizen):
  def __init__(self, name, country, category, year):
    #super method scales inheritance tree one branch from its
    #argument, supplying the second as instance to the class-instance
    #method
    super(Winner, self).__init__(name, country)
    self.category = category
    self.year = year

  def print_details(self):
    print("Nobel winner %s from %s, category %s, year %s"  
      % (self.name, self.country, self.category, self.year))

# winner = Winner(c, 'sina', 'chem', 1990)
# winner = Winner(c, 'sina', 'chem', 1990) -  what is c?
winner = Winner("Sina", "US", "chem", 1990)
winner.print_details()

#tuple unpacking

# (a,b) = (b,a)

def fib(n):
  x, y = 0, 1
  for i in range(n):
    print(x)
    x, y = y, x + y
 
'''to ignore one of the unpacked variables, use underscore'''

winner = 'Sina', 'Physics', 1921, 'Swiss'

name, _, _, nationality = winner

#collections module

from collections import Counter, defaultdict, OrderedDict

#Counter..counters! ex below:
items = ['F', 'C', 'C', 'A', 'B', 'A', 'C', 'E', 'F']
count = Counter(items) #Counter({'C': 3, 'A': 2, 'F': 2, 'B': 1, 'E': 1})

d = items
d = defaultdict(int) #instead of throwing a KeyError if a key has no value,
#the key will instead be set to 0
# print("d before",type( d))
# print(d)
# for item in items:
#   # print("item before", item)
#   d[item] += 1
#   # print("item after", d[item])
# print('====================')
# print("d after", d)
# print(d)
# order = OrderedDict(d)
# print(order)


nums = range(10)
odd_squares= [x*x for x in nums if x%2]
sum(odd_squares)

#best to use named functions to keep things clean

def is_odd(x):
  return x%2

def sq(x):
  return x*x

summed = sum([sq(x) for x in nums if is_odd(x)])
# print(summed)

odds = filter(lambda x: x % 2, nums)




























