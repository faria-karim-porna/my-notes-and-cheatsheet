import React from "react";
import { Accordion } from "../common/Accordion";

import { Block } from "../common/Block";
import { UncheckList } from "../common/UncheckList";
import { CheckList } from "../common/CheckList";

const RoadmapDataStructureAndAlgorithmComponent = () => {
  return (
    <>
      <Block title="💥 Topics To Be Noted Down:">
        <div>1. Steps To Implement Each Data Structure/Algorithm</div>
        <div>2. Dry Run Of Each Data Structure/Algorithm</div>
        <div>3. Advantage Of Each Data Structure/Algorithm</div>
        <div>4. Disadvantage Of Each Of The Data Structure/Algorithm</div>
        <div>5. Time Complexity Of Each Data Structure/Algorithm</div>
        <div>6. Space Complexity Of Each Data Structure/Algorithm</div>
        <div>7. When To Use Which Data Structure/Algorithm</div>
        <div>8. At Least Three Approach Of Each Problems</div>
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
              {[<div>Use With Object</div>]}
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
        <Accordion outer="Now"></Accordion>
        <Accordion outer="Later"></Accordion>
        <Accordion outer="Latest"></Accordion>
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