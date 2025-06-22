
# 1. Write a program that checks if the input is a string:

def checking_input(a):
    return type(a)
   
def checking_input_result(a):
    result = checking_input(a)
    if result == str:
        return True
    else: 
        return False



a = "hello"

b = 123
c = True



print(checking_input_result(a))
print(checking_input_result(b))
print(checking_input_result(c))


# 2.Write a program that checks if a string is blank:

def check_string(a):
    if a == "" or a ==" ":
        return True
    else:
        return False


a = " "
b = ""
c = "abc"
d = 123

print(check_string(a))
print(check_string(b))
print(check_string(c))
print(check_string(d))

# 3.Write a program that capitalizes the first character of a string.

def captialize_first(a):
    return a.capitalize()


print(captialize_first("abcdef"))
print(captialize_first("heydar"))
