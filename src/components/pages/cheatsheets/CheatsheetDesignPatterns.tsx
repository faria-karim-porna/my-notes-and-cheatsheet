import React from "react";
import { Accordion } from "../../common/Accordion";
import { CodeBlock } from "../../common/Codeblock";
import { Block } from "../../common/Block";
import { SubBlock } from "../../common/SubBlock";
import { Hints } from "../../common/Hints";

const CheatSheetDesignPatternsComponent = () => {
  return (
    <>
      <div>Design Patterns Cheatsheet</div>
      <hr />
      <Block>
        <SubBlock title="💡 Resoures:">
          <div>https://www.youtube.com/watch?v=rQJtKrqgPW0</div>
          <div>https://www.youtube.com/watch?v=sJ-c3BA-Ypo</div>
          <div>https://www.youtube.com/watch?v=oeQWxhlnCHM</div>
        </SubBlock>
        <SubBlock title="📜 Topics To Be Noted Down:">
          <div>What it does</div>
          <div>Where to use</div>
          <div>Steps</div>
          <div>Advantages (if possible)</div>
          <div>Code</div>
          <div>Diagram</div>
        </SubBlock>
      </Block>
      <Accordion outer="Basic Idea">
        <Accordion outer="What is design pattern">
          <ul>
            <li>
              In object oriented programming, we have to make our code reliable,
              scalable and highly maintainable. To make such code software
              developers often face some problems. There are some tested and
              proven template for these problems. They are called design
              patterns.
            </li>
            <li>
              A design patterns are well-proved solution for solving the
              specific common object-oriented design problems.
            </li>
            <li>
              Design patterns are programming language independent strategies
              (an idea, not a particular implementation).
            </li>
            <li>
              Every design pattern has some specification or set of rules for
              solving the problems. Design patterns are solutions to general
              problems that software developers faced during software
              development.
            </li>
            <li>
              These solutions were obtained by trial and error by numerous
              software developers over quite a substantial period of time.
            </li>
          </ul>
          <Hints
            hints={[
              `Tested And Proven Templates`,
              `Common OOP And Software Development Problem`,
              `Language Independent`,
              `Has Set Of Rules`,
              `By Trial And Error`,
              `Substantial Period Of Time`,
            ]}
          />
        </Accordion>
        <Accordion outer="When to use design patterns">
          <ul>
            <li>
              It's not mandatory to implement design patterns in your project
              always.
            </li>
            <li>
              Design patterns are <b>not</b> meant for project development.
            </li>
            <li>Design patterns are meant for common problem-solving.</li>
            <li>
              Whenever there is a need, you have to implement a suitable pattern
              to avoid such problems in the future.
            </li>
            <li>
              To find out which pattern to use. You just have to try to
              understand the design patterns and their purposes. Only by then,
              you will be able to pick the right one.
            </li>
          </ul>
          <Hints
            hints={[
              `Not Mandatory`,
              `To Make Reliable, Scalable And Maintainable`,
              `To Avoid Facing Future Problems`,
            ]}
          />
        </Accordion>
        <Accordion outer="Advantages of design pattern">
          <ul>
            <li> They are reusable in multiple projects.</li>
            <li>
              They provide the solutions that help to define the system
              architecture.
            </li>
            <li> They capture the software engineering experiences.</li>
            <li> They provide transparency to the design of an application.</li>
            <li>
              They are well-proved and testified solutions since they have been
              built upon the knowledge and experience of expert software
              developers.
            </li>
            <li>
              The idea is to speed up the development process by providing well
              tested, proven development/design paradigm.
            </li>
            <li>
              By using the design patterns you can make your code more flexible,
              reusable, and maintainable.
            </li>
          </ul>
          <Hints
            hints={[
              `Reusable In Different Projects`,
              `Well Proved And Testified Solutions`,
              `Make Code Flexible, Reusable And Maintainable`,
            ]}
          />
        </Accordion>
        <Accordion outer="Gang of Four (GOF)">
          <ul>
            <li>
              In <b>1994</b>, <b>four</b> authors
              <ul>
                <li>Erich Gamma,</li>
                <li>Richard Helm,</li>
                <li>Ralph Johnson</li>
                <li>John Vlissides</li>
              </ul>
              published a <b>book</b> titled{" "}
              <b>
                Design Patterns - Elements of Reusable Object-Oriented Software
              </b>{" "}
              which initiated the concept of Design Pattern in Software
              development.
            </li>
            <li>
              <b>These authors are collectively known as Gang of Four (GOF).</b>{" "}
              According to these authors design patterns are primarily based on
              the following principles of object-orientated design.
              <ul>
                <li>
                  Program to an <b>interface</b> (interfaces or abstract classes), <b>not</b> an implementation (concrete classes)
                </li>
                <li>Favor object <b>composition</b> (combining smaller, more focused objects) over inheritance (a hierarchy of classes).</li>
              </ul>
            </li>
          </ul>
          <Hints hints={[`1994`, `Four Author`, `ERRJ`,`Design Patterns - Elements Of Reusable Object-Oriented Software`, `Collectively Known`, `2`, `Interface > Implementation`, `Composition > Inheritance`]}/>
        </Accordion>
      </Accordion>
    </>
  );
};

export const CheatSheetDesignPatterns = React.memo(
  CheatSheetDesignPatternsComponent
);
