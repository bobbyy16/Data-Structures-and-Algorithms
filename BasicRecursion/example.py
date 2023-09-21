count = 0
def rec():
    global count
    if count == 3: # base condition -> which stops the recursion call
        return
    print(count)
    count += 1
    rec()

def run():
    rec()

run()