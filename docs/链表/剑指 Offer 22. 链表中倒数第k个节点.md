## 剑指 Offer 22. 链表中倒数第k个节点



```java
    public ListNode getKthFromEnd(ListNode head, int k) {
        // 定义两个指针
        ListNode p1 = head, p2 = head;

        // p1先前进k个，剩下n-k，然后p1,p2同时前进，当p1到末尾时p2刚好走了n-k
        while(p1.next != null){
            // 因为循环退出条件是p1.next,这里k大于1就要开始让p2同步进行，否则最后p2会少走了一步
            if(k > 1){        
                k--;
            }else{
                p2 = p2.next;
            }

            p1 = p1.next;
        }

        return p2;
    }
```

