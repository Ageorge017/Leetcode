/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
int count(struct ListNode* listPtr);
struct ListNode* appendZeros(struct ListNode* shortList, int amount);
struct ListNode* pushNode(int value, struct ListNode* listPtr);

struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    int addend1, addend2, sum;
    struct ListNode* l3 = (struct ListNode*)malloc(sizeof(struct ListNode));
    int carry = 0;
    int sameSize = count(l1) - count(l2);
    //lists should be in the same size
    if (sameSize){
        if(sameSize>0){
            //printf("address of l2: %d \n", l2);
            l2 = appendZeros(l2, sameSize);
            //printf("size of l2: %d\n", count(l2));
        }
        if(sameSize<0){
            //printf("address of l1: %d \n", l1);
            l1 = appendZeros(l1, sameSize*(-1));
            //printf("size of l1: %d\n", count(l1));
        }
    }
    
    while(1){
        sum = 0;
        addend1 = l1->val; 
        addend2 = l2->val;
        sum = addend1+addend2+carry;
        printf("l1 is %d; l2 is %d; l3 is %d\n", addend1, addend2, l3->val);
        if(sum > 10){
            sum = sum % 10;
            carry = 1;
        }
        else{
            carry = 0;
        }
        //push sum into new list
        l3 = pushNode(sum, l3);
        //check if EOL
        if(!(l1->next)){
            if (carry == 1){
                l3 = pushNode(1, l3);
                return l3;
            }   
            return l3;
        }         
        l1 = l1->next;
        l2 = l2->next;    
    }
    //add nodes carry over check
    //push into new list
    return 0; 
    
}
struct ListNode* pushNode(int value, struct ListNode* listPtr){
    struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));
    struct ListNode* tempPtr = (struct ListNode*)malloc(sizeof(struct ListNode));
    tempPtr = listPtr;
    
    newNode->val = value;
    newNode->next = NULL;
    
    if(listPtr == NULL){
        listPtr = newNode;
        return listPtr;
    }
    
    while(tempPtr->next != NULL){
        tempPtr = tempPtr->next;     
    }
    tempPtr->next = newNode;
    newNode = NULL;
    tempPtr = NULL;
    free(newNode);
    free(tempPtr);
    return listPtr;
    
}
struct ListNode* appendZeros(struct ListNode* shortList, int amount){
    struct ListNode* tempNode; 
    tempNode = shortList;
    while(1){
        if(tempNode->next == NULL){         
            break;
        }
        else{
            tempNode = tempNode->next;
        }
    }
    while(amount){
        struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));
        newNode->val = 0;
        newNode->next = NULL;
        tempNode->next =newNode;
        tempNode = tempNode->next;
        amount--;
        newNode = NULL;
        free(newNode);
    }   
    return shortList;
}

int count(struct ListNode* listPtr) {
 int counter = 0; 
  while(listPtr != NULL){   
   counter++;
   listPtr = listPtr->next;   
  }
 return counter;
} 