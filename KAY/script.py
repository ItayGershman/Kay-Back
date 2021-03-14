import sys

def check_position(arrayOfVal):
    if arrayOfVal == 'Position A':
        return True

if __name__ == '__main__':
    # print('#Hello from python#')
    # print('First param:'+sys.argv[1]+'#')
    # print('Second param:'+sys.argv[2]+'#')
    # args_to_return = sys.argv[1] + ' and ' + sys.argv[2]
    arrayOfVal = sys.argv[1]
    if check_position(arrayOfVal) is True:
        print('heLLO')
    else:
        print ('Error')
    # send(args_to_return)
    # return args_to_return
