def f(N):
    i = 1
    count = 0
    while i <= N:
        for j in range(i):
            print()
        for k in range(j):
            count += 1
        print(i)      
    return count

f(5)