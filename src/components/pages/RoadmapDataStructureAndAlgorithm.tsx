import React from "react";
import { Accordion } from "../common/Accordion";
import { CodeBlock } from "../common/Codeblock";

const RoadmapDataStructureAndAlgorithmComponent = () => {
  return (
    <>
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
      <Accordion outer="9. Arrays"></Accordion>
      <Accordion outer="10. Strings"></Accordion>
      <Accordion outer="11. Searching">
        <Accordion outer="Now"></Accordion>
        <Accordion outer="Later"></Accordion>
        <Accordion outer="Latest"></Accordion>
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
