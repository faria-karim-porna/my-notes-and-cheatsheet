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
                  Program to an <b>interface</b> (interfaces or abstract
                  classes), <b>not</b> an implementation (concrete classes)
                </li>
                <li>
                  Favor object <b>composition</b> (combining smaller, more
                  focused objects) over inheritance (a hierarchy of classes).
                </li>
              </ul>
            </li>
          </ul>
          <Hints
            hints={[
              `1994`,
              `Four Author`,
              `ERRJ`,
              `Design Patterns - Elements Of Reusable Object-Oriented Software`,
              `Collectively Known`,
              `2`,
              `Interface > Implementation`,
              `Composition > Inheritance`,
            ]}
          />
        </Accordion>
      </Accordion>
      <Accordion outer="Creational Design Patterns">
        <Accordion outer="Theory">
          <Accordion outer="What is creational design pattern?">
            <ul>
              <li>It deals with how objects will be created from the class.</li>
              <li>
                Creational design patterns deal with the process of object
                creation, providing mechanisms for class instantiation or object
                initialization.
              </li>
            </ul>
            <Hints hints={[`How Objects Will Be Created`]} />
          </Accordion>
          <Accordion outer="When to use creational design pattern?">
            <ul>
              <li>
                Creational design pattern makes sure objects are created
                correctly
              </li>
              <li> Handles complex setup steps</li>
              <li>
                Gives the flexibility in creating different types of objects
                easily.
              </li>
            </ul>
            <Hints
              hints={[
                `Creating Correctly`,
                `Control Creation`,
                `Complex Setup Steps`,
                `Flexibility In Different Object Creation`,
              ]}
            />
          </Accordion>
        </Accordion>
        <Accordion outer="Singleton Design Pattern">
          <Accordion outer="What it does">
            <ul>
              <li> Creational design pattern.</li>
              <li>
                Create only one object/instance for the class for the entire
                system.
              </li>
              <li>Object creation should be controlled from a single point</li>
              <li>
                Singleton Pattern says that just{" "}
                <b>
                  "define a class that has only one instance and provides a
                  global point of access to it".
                </b>
              </li>
            </ul>
            <Hints
              hints={[
                `Creational`,
                `Only One Object Creation`,
                `Control From Single Point`,
              ]}
            />
          </Accordion>
          <Accordion outer="Where to use?">
            <ul>
              <li>
                In configuration manager ( cause configuration of whole system
                is managed by one file)
              </li>
              <li>In a logger (cause log messages are written in one file)</li>
              <li>In DB connection (cause only one db for a system)</li>
            </ul>
            <Hints
              hints={[`Configuration Manager`, `Logger`, `DB Connection`]}
            />
          </Accordion>
          <Accordion outer="Steps">
            <ul>
              <li>
                <b>Private Constructor</b>: First we have to restrict users from
                creating objects. We can do this by converting the constructor
                from public to private.
              </li>
              <li>
                <b>Static Getter Function</b>: Make a static function which will
                be used by the users (not the constructor anymore). This
                function will return the same instance every time it is called.
              </li>
              <li>
                <b>Static Member</b>: Create a static instance/object of the
                class. The initial value of the instance will be nullptr. The
                static function will return this instance. If the value of the
                instance is nullptr then a new instance will be created and then
                the instance will be returned from the static function.
                Otherwise, the static function will simply return the instance.
              </li>
              <li>
                <b>Client Code</b>: In the client code object will be created
                using the static function of the singleton class.
              </li>
            </ul>
            <Hints
              hints={[
                `Make Private Constructor`,
                `Create Static Getter Function`,
                `Add Static Object`,
                `Use Getter Function For Object Creation In Client Code`,
              ]}
            />
          </Accordion>
          <Accordion outer="Forms of design pattern">
            <ul>
              <li>
                There are two forms of singleton design pattern
                <ul>
                  <li>
                    <b>Early Instantiation</b>: creation of instance at load
                    time.
                  </li>
                  <li>
                    <b>Lazy Instantiation</b>: creation of instance when
                    required.
                  </li>
                </ul>
              </li>
            </ul>
            <Accordion outer="Early Instantiation">
              <ul>
                <li>
                  We create the instance of the class at the time of declaring
                  the static data member, so instance of the class is created at
                  the time of class loading.
                </li>
                <li> Object is created while declaring data member</li>
              </ul>
              <Hints
                hints={[
                  `New Keyword Is Used At The Time Of Member Declaration In Class`,
                  `Static Function Only Returns The Created Object`,
                ]}
              />
            </Accordion>
            <Accordion outer="Lazy Instantiation">
              <ul>
                <li>
                  We create the instance of the class in synchronized method or
                  synchronized block, so instance of the class is created when
                  required.
                </li>
                <li>Object is created inside the static function</li>
                <li>
                  So when the function will be called from the client side, the
                  object will be created
                </li>
              </ul>
              <Hints
                hints={[
                  `Just Declare The Object In The Class`,
                  `Object Is Created Using New Keyword Inside The Static Function`,
                ]}
              />
            </Accordion>
          </Accordion>
          <Accordion outer=""></Accordion>
          <Accordion outer="Advantages">
            <ul>
              <li>
                This helps in saving resources and memory because object is not
                created at each request. Only single instance is reused again
                and again.
              </li>
              <li>Singleton objects are easy to manage and control.</li>
            </ul>
          </Accordion>
          <Accordion outer="Code">
            <Accordion outer="Basic">
              <CodeBlock language={"javascript"}>
                {`class Singleton {
    private static instance: Singleton;
    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode();`}
              </CodeBlock>
            </Accordion>
            <Accordion outer="Early instantiation">
              <CodeBlock language={"javascript"}>
                {`class EarlySingleton {
  private static instance: EarlySingleton = new EarlySingleton();

  private constructor() {}

  public static getInstance(): EarlySingleton {
    return EarlySingleton.instance;
  }
}

function clientCode() {
  const s1 = EarlySingleton.getInstance();
  const s2 = EarlySingleton.getInstance();

  if (s1 === s2) {
    console.log("Early Singleton works, both variables contain the same instance.");
  } else {
    console.log("Early Singleton failed, variables contain different instances.");
  }
}

clientCode();`}
              </CodeBlock>
            </Accordion>
            <Accordion outer="Lazy instantiation">
              <ul>
                <li>Exactly same as basic code.</li>
              </ul>
              <CodeBlock language={"javascript"}>
                {`class LazySingleton {
    private static instance: LazySingleton;
    private constructor() { }

    public static getInstance(): LazySingleton {
        if (!LazySingleton.instance) {
            LazySingleton.instance = new LazySingleton();
        }
        return LazySingleton.instance;
    }
}

function clientCode() {
    const s1 = LazySingleton.getInstance();
    const s2 = LazySingleton.getInstance();

    if (s1 === s2) {
        console.log('Lazy singleton works, both variables contain the same instance.');
    } else {
        console.log('Lazy singleton failed, variables contain different instances.');
    }
}

clientCode();`}
              </CodeBlock>
            </Accordion>
            <Accordion outer="Multi-threading and thread safety">
              <CodeBlock language={"javascript"}>{``}</CodeBlock>
            </Accordion>
            <Accordion outer="Double checking">
              <CodeBlock language={"javascript"}>{``}</CodeBlock>
            </Accordion>
            <Accordion outer="Ensure all paths">
              <CodeBlock language={"javascript"}>{``}</CodeBlock>
            </Accordion>
          </Accordion>
          <Accordion outer=""></Accordion>
        </Accordion>
        <Accordion></Accordion>
      </Accordion>
    </>
  );
};

export const CheatSheetDesignPatterns = React.memo(
  CheatSheetDesignPatternsComponent
);
