count = 0
def rec():
    global count
    if count == 3:
        return
    print(count)
    count += 1
    rec()

def run():
    rec()

run()