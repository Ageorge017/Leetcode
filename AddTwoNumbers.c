/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
int count(struct ListNode* listPtr);
struct ListNode* appendZeros(struct ListNode* shortList, int amount);

struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    
    int sameSize = count(l1) - count(l2);
    if (sameSize){
        if(sameSize>0){
            printf("address of l2: %d \n", l2);
            l2 = appendZeros(l2, sameSize);
            printf("size of l2: %d\n", count(l2));
        }
        if(sameSize<0){
            printf("address of l1: %d \n", l1);
            l1 = appendZeros(l1, sameSize*(-1));
            printf("size of l1: %d\n", count(l1));
        }
    }
    return 0; 
    
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
        struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));;
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
   //printf("In COUNT: %d \n", listPtr->val);
   listPtr = listPtr->next;   
  }
 return counter;
} 
// struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
//     struct ListNode* l3 = (struct ListNode*)malloc(sizeof(struct ListNode)); 
    
//     int addend1, addend2, sum; 
//     int carry = 0;
    
//     //printf("Testing COUNT: %d, %d", count(l1), count(l2));
   
//   while(count(l1)||count(l2)){ 
    
//         addend1 = pop(&l1);
//         addend2 = pop(&l2);
//         sum = addend1 + addend2 + carry;
      
//     //printf("Testing POP %d %d %d \n", addend1, addend2, sum); //Test POP

//        if (sum  >= 10){
//             sum = sum % 10;
//             carry = 1;
//         }
//         else{
//             carry = 0;
//         }
//         //printf("Pushing %d:\n", sum);
//         push(&l3, sum);
//        //printf("Testing PUSH: %d\n", pop(&l3)); 
      
//    }
//     //printf("testing everything: %d %d %d\n", pop(&l3), pop(&l3), pop(&l3));
    
//     return &l3;
// }
