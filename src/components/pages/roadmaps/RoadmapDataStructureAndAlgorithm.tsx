import React from "react";
import { Block } from "../../common/Block";
import { Accordion } from "../../common/Accordion";
import { UncheckList } from "../../common/UncheckList";
import { CheckList } from "../../common/CheckList";
import { SubBlock } from "../../common/SubBlock";

const RoadmapDataStructureAndAlgorithmComponent = () => {
  return (
    <>
      <Block>
        <SubBlock title="💥 Topics To Be Noted Down:">
          <div>Steps To Implement Each Data Structure/Algorithm</div>
          <div>Dry Run Of Each Data Structure/Algorithm</div>
          <div>Advantage Of Each Data Structure/Algorithm</div>
          <div>Disadvantage Of Each Of The Data Structure/Algorithm</div>
          <div>Time Complexity Of Each Data Structure/Algorithm</div>
          <div>Space Complexity Of Each Data Structure/Algorithm</div>
          <div>When To Use Which Data Structure/Algorithm</div>
          <div>At Least Three Approach Of Each Problems</div>
        </SubBlock>
      </Block>
      <Accordion outer="1. Basics">
        <Accordion outer="Now">
          <div>Print</div>
          <div>User Input</div>
          <div>Data Types</div>
          <div>Operators</div>
          <div>Conditions</div>
          <div>Switch Case</div>
          <div>Loops</div>
          <div>Functions</div>
          <div>Structure</div>
          <div>Enumeration</div>
        </Accordion>
        <Accordion outer="Later"></Accordion>
        <Accordion outer="Latest"></Accordion>
      </Accordion>
      <Accordion outer="2. Class">
        <Accordion outer="Now">
          <div>Constructor</div>
          <div>Destructor</div>
          <div>Access Modifier</div>
          <div>Polymorphism</div>
          <div>Inheritance</div>
          <div>Abstraction</div>
          <div>Encapsulation</div>
        </Accordion>
        <Accordion outer="Later">
          <div>Friend Function</div>
        </Accordion>
        <Accordion outer="Latest"></Accordion>
      </Accordion>
      <Accordion outer="3. Complexities">
        <Accordion outer="Now">
          <div>Time</div>
          <div>Space</div>
        </Accordion>
        <Accordion outer="Later"></Accordion>
        <Accordion outer="Latest"></Accordion>
      </Accordion>
      <Accordion outer="4. Data Structure And STL Basic">
        <Accordion outer="Now">
          <Accordion outer="1. Vector">
            <CheckList>
              <div>Declaration</div>
              <div>Insert</div>
              <div>Input</div>
              <div>Print</div>
              <div>Update</div>
              <div>Delete</div>
              <div>Access</div>
              <div>Use In Function Parameter</div>
              <div>Use In Function Return Type</div>
            </CheckList>
            <UncheckList>
              <div>Use With Object</div>
            </UncheckList>
          </Accordion>
          <Accordion outer="2. List">
            <div>Declaration</div>
            <div>Access</div>
            <div>Input</div>
            <div>Insert</div>
            <div>Delete</div>
            <div>Update</div>
            <div>Use In Function Parameter</div>
            <div>Use In Function Return Type</div>
            <div>Use With Object</div>
          </Accordion>
          <Accordion outer="3. Set">
            <div>Declaration</div>
            <div>Access</div>
            <div>Input</div>
            <div>Insert</div>
            <div>Delete</div>
            <div>Update</div>
            <div>Use In Function Parameter</div>
            <div>Use In Function Return Type</div>
            <div>Use With Object</div>
          </Accordion>
          <Accordion outer="4. Map">
            <div>Declaration</div>
            <div>Access</div>
            <div>Input</div>
            <div>Insert</div>
            <div>Delete</div>
            <div>Update</div>
            <div>Use In Function Parameter</div>
            <div>Use In Function Return Type</div>
            <div>Use With Object</div>
          </Accordion>
        </Accordion>
        <Accordion outer="Later">
          <Accordion outer="1. Deque">
            <div>Declaration</div>
            <div>Access</div>
            <div>Input</div>
            <div>Insert</div>
            <div>Delete</div>
            <div>Update</div>
            <div>Use In Function Parameter</div>
            <div>Use In Function Return Type</div>
            <div>Use With Object</div>
          </Accordion>
          <Accordion outer="2. Stack">
            <div>Declaration</div>
            <div>Access</div>
            <div>Input</div>
            <div>Insert</div>
            <div>Delete</div>
            <div>Update</div>
            <div>Use In Function Parameter</div>
            <div>Use In Function Return Type</div>
            <div>Use With Object</div>
          </Accordion>
          <Accordion outer="3. Queue">
            <div>Declaration</div>
            <div>Access</div>
            <div>Input</div>
            <div>Insert</div>
            <div>Delete</div>
            <div>Update</div>
            <div>Use In Function Parameter</div>
            <div>Use In Function Return Type</div>
            <div>Use With Object</div>
          </Accordion>
          <Accordion outer="4. Priority Queue">
            <div>Declaration</div>
            <div>Access</div>
            <div>Input</div>
            <div>Insert</div>
            <div>Delete</div>
            <div>Update</div>
            <div>Use In Function Parameter</div>
            <div>Use In Function Return Type</div>
            <div>Use With Object</div>
          </Accordion>
        </Accordion>
        <Accordion outer="Latest">
          <Accordion outer="1. Multiset">
            <div>Declaration</div>
            <div>Access</div>
            <div>Input</div>
            <div>Insert</div>
            <div>Delete</div>
            <div>Update</div>
            <div>Use In Function Parameter</div>
            <div>Use In Function Return Type</div>
            <div>Use With Object</div>
          </Accordion>
          <Accordion outer="2. Multimap">
            <div>Declaration</div>
            <div>Access</div>
            <div>Input</div>
            <div>Insert</div>
            <div>Delete</div>
            <div>Update</div>
            <div>Use In Function Parameter</div>
            <div>Use In Function Return Type</div>
            <div>Use With Object</div>
          </Accordion>
        </Accordion>
      </Accordion>
      <Accordion outer="5. Recursion"></Accordion>
      <Accordion outer="6. Divide And Conquer"></Accordion>
      <Accordion outer="7. Backtracking"></Accordion>
      <Accordion outer="8. Patterns"></Accordion>
      <Accordion outer="9. Arrays">
        <Accordion outer="Now">
          <UncheckList>
            <div>Declaration</div>
            <div>Access</div>
            <div>Delete</div>
            <div>Update</div>
            <div>Subarray</div>
            <div>Subsequence</div>
            <div>Dutch National Flag Algorithm</div>
            <div>Sliding Window</div>
            <div>Two pointers</div>
          </UncheckList>
        </Accordion>
        <Accordion outer="Later"></Accordion>
        <Accordion outer="Latest"></Accordion>
      </Accordion>
      <Accordion outer="10. Strings"></Accordion>
      <Accordion outer="11. Searching">
        <Accordion outer="Now">
          <div>1. Linear Search</div>
          <div>2. Binary Search</div>
        </Accordion>
        <Accordion outer="Later">
          <div>1. Ternary Search</div>
          <div>2. Jump Search</div>
        </Accordion>
        <Accordion outer="Latest">
          <div>1. Interpolation Search</div>
          <div>2. Exponential Search</div>
        </Accordion>
      </Accordion>
      <Accordion outer="12. Sorting">
        <Accordion outer="Now">
          <UncheckList>
            <div>Bubble Sort</div>
            <div>Recursive Bubble Sort</div>
            <div>Selection Sort</div>
            <div>Insertion Sort</div>
            <div>Recursive Insertion Sort</div>
            <div>Quick Sort</div>
            <div>3-Way QuickSort (Dutch National Flag)</div>
            <div>Iterative Quick Sort</div>
            <div>Merge Sort</div>
            <div>Iterative Merge Sort</div>
            <div>Heap Sort</div>
            <div>Counting Sort</div>
            <div>Radix Sort</div>
            <div>Bucket Sort</div>
            <div>ShellSort</div>
          </UncheckList>
        </Accordion>
        <Accordion outer="Later">
          <UncheckList>
            <div>Quick Sort on Singly Linked List</div>
            <div>Quick Sort on Doubly Linked List</div>
            <div>Merge Sort for Linked Lists</div>
            <div>Merge Sort for Doubly Linked List </div>
            <div>3-way Merge Sort</div>
            <div>Binary Insertion Sort</div>
            <div>Pigeonhole Sort</div>
            <div>Cycle Sort</div>
          </UncheckList>
        </Accordion>
        <Accordion outer="Latest">
          <UncheckList>
            <div>Tim Sort</div>
            <div>Comb Sort</div>
            <div>Cocktail Sort</div>
            <div>Strand Sort</div>
            <div>Bitonic Sort</div>
            <div>Pancake sorting</div>
            <div>BogoSort or Permutation Sort</div>
            <div>Gnome Sort</div>
            <div>Sleep Sort - The King of Laziness / Sorting while Sleeping</div>
            <div>Structure Sorting (By Multiple Rules) in C++</div>
            <div>Stooge Sort</div>
            <div>Tag Sort (To get both sorted and original)</div>
            <div>Tree Sort</div>
            <div>Cartesian Tree Sorting</div>
            <div>Odd-Even Sort / Brick Sort</div>
          </UncheckList>
        </Accordion>
      </Accordion>
      <Accordion outer="13. Bit Manipulation"></Accordion>
      <Accordion outer="14. Number Theory"></Accordion>
      <Accordion outer="15. Linked List"></Accordion>
      <Accordion outer="16. Stack"></Accordion>
      <Accordion outer="17. Queue"></Accordion>
      <Accordion outer="18. Tree"></Accordion>
      <Accordion outer="19. Graph"></Accordion>
      <Accordion outer="20. Greedy"></Accordion>
      <Accordion outer="21. Dynamic Programming"></Accordion>
      <Accordion outer="22. Tries"></Accordion>
      <Accordion outer="23. Hashmap"></Accordion>
      <Accordion outer="23. Game Theory"></Accordion>
    </>
  );
};

export const RoadmapDataStructureAndAlgorithm = React.memo(RoadmapDataStructureAndAlgorithmComponent);
