#include <stdio.h>
#include <stdlib.h>

int main(int argc, char** argv) {
    FILE *fp;
    fp = fopen("../ITbonusH29.txt", "r");

    if (fp == NULL)
    {
        fprintf(stderr, "File open error!");
        return 1;
    }
    

    return 0;
}

