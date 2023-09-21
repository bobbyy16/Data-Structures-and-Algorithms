count = 0
def rec():
    global count
    if count == 3: # base condition -> which stops the recursion c
        return
    print(count)
    count += 1
    rec()

def run():
    rec()

run()