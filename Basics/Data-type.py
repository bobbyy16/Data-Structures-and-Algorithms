# Problem

# https://www.codingninjas.com/studio/problems/data-type_8357232?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf&leftPanelTab=1

def dataTypes(type):
    # Checking 'type' with all the data types we know.
    if type == "Integer":
        return 4
    elif type == "Long":
        return 8
    elif type == "Float":
        return 4
    elif type == "Double":
        return 8
    elif type == "Character":
        return 1
    else:
        # 'type' should have matched with some data type above, this line should not be reached
        return -1  