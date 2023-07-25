#  problem

# https://www.codingninjas.com/studio/problems/switch-case-statement_8357244?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf&leftPanelTab=0

from typing import *
import math

def areaSwitchCase(ch: int, a: List[float]):
    # Write your code here
    if ch == 1:
        area = math.pi*a[0]*a[0]
    elif ch == 2:
        area = a[0]*a[1]
    return format(area, '.5f')
