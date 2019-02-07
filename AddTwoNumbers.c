/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
int pop(struct ListNode** listPtr);
int count(struct ListNode* listPtr);
void push(struct ListNode** listPtr, int value);

struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    struct ListNode* l3 = (struct ListNode*)malloc(sizeof(struct ListNode)); 
    
    int addend1, addend2, sum; 
    int carry = 0;
    
    //printf("Testing COUNT: %d, %d", count(l1), count(l2));
   
  while(count(l1)||count(l2)){ 
    
        addend1 = pop(&l1);
        addend2 = pop(&l2);
        sum = addend1 + addend2 + carry;
      
    //printf("Testing POP %d %d %d \n", addend1, addend2, sum); //Test POP

       if (sum  >= 10){
            sum = sum % 10;
            carry = 1;
        }
        else{
            carry = 0;
        }
        //printf("Pushing %d:\n", sum);
        push(&l3, sum);
       //printf("Testing PUSH: %d\n", pop(&l3)); 
      
   }
    //printf("testing everything: %d %d %d\n", pop(&l3), pop(&l3), pop(&l3));
    
    return &l3;
}

int pop(struct ListNode** listPtr){
    int value = 0;
    struct ListNode* tempPtr;

    if(*listPtr){ 
        tempPtr = *listPtr;
        value = tempPtr->val;
        *listPtr = tempPtr->next;
        tempPtr = NULL;
        free(tempPtr);
    }   
    return value;
}

void push(struct ListNode** listPtr, int value){
    struct ListNode* newPtr = (struct ListNode*)malloc(sizeof(struct ListNode));
    newPtr->val = value;
    newPtr->next = *listPtr;    
    *listPtr = newPtr;
    newPtr = NULL;
    free(newPtr);
    
}

int count(struct ListNode* listPtr) {
 int counter = 0; 
  while(listPtr != NULL){   
   counter++;
   //printf("In COUNT: %d \n", listPtr->val);
   listPtr = listPtr->next;
   
  }
 return counter;
} 