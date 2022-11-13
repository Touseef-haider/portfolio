import styles from "./resume.module.css";

const Resume = () => {
  return (
    <div className={styles.container} id="resume">
      <div className={styles.resume}>
        <h1>RESUME</h1>
      </div>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className={styles.jobHistory}>
        <div className={styles.left}>
          <div className={styles.summary}>
            <h1>Sumary</h1>
            <div className={styles.education}>
              <div className={styles.spots}>
                <div
                  className={styles.spot}
                  style={{ backgroundColor: "white" }}
                ></div>
                <h2>Touseef Haider</h2>
                <p>
                  Innovative and deadline-driven Graphic Designer with 3+ years
                  of experience designing and developing user-centered
                  digital/print marketing material from initial concept to
                  final, polished deliverable.
                </p>
                <ul>
                  <li>Portland par 127,Orlando, FL</li>
                  <li>(123) 456-7891</li>
                  <li>alice.barkley@example.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.summary}>
            <h1>Education</h1>
            <div className={styles.education}>
              <div className={styles.spots}>
                <div className={styles.spot}></div>
                <h2>Bachelors In Computer Science</h2>
                <div className={styles.tag}>
                  <p>2018 - 2022</p>
                </div>
                <p>University Of Karachi</p>
                <p>
                  Qui deserunt veniam. Et sed aliquam labore tempore sed
                  quisquam iusto autem sit. Ea vero voluptatum qui ut
                  dignissimos deleniti nerada porti sand markend
                </p>
              </div>
              <div className={styles.spots}>
                <div
                  className={styles.spot}
                  style={{ backgroundColor: "white" }}
                ></div>
                <h2>Intermediate from Karachi Board</h2>
                <div className={styles.tag}>
                  <p>2016 - 2018</p>
                </div>
                <p>Govt. National College</p>
                <p>
                  Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                  reiciendis et quis Eius vel ratione eius unde vitae rerum
                  voluptates asperiores voluptatem Earum molestiae consequatur
                  neque etlon sader mart dila
                </p>
              </div>
              <div className={styles.spots}>
                <div
                  className={styles.spot}
                  style={{ backgroundColor: "white" }}
                ></div>
                <h2>Matriculation from Karachi Board</h2>
                <div className={styles.tag}>
                  <p>2015 - 2016</p>
                </div>
                <p>NDDS. School Safoora Karachi</p>
                <p>
                  Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                  reiciendis et quis Eius vel ratione eius unde vitae rerum
                  voluptates asperiores voluptatem Earum molestiae consequatur
                  neque etlon sader mart dila
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.experience}>
            <h1>Professional Experience</h1>
            <div className={styles.education}>
              <div className={styles.spots}>
                <div className={styles.spot}></div>
                <h2>Senior Software Engineer</h2>
                <div className={styles.tag}>
                  <p>2021 - Present</p>
                </div>
                <p>Kodexo Labs,Nazimabad 4, Karachi</p>
                <ul>
                  <li>
                    Lead in the design, development, and implementation of the
                    graphic, layout, and production communication materials{" "}
                  </li>
                  <li>
                    Delegate tasks to the 7 members of the design team and
                    provide counsel on all aspects of the project.
                  </li>
                  <li>
                    {" "}
                    Supervise the assessment of all graphic materials in order
                    to ensure quality and accuracy of the design
                  </li>
                  <li>
                    Oversee the efficient use of production project budgets
                    ranging from $2,000 - $25,000
                  </li>
                </ul>
              </div>
              <div className={styles.spots}>
                <div
                  className={styles.spot}
                  style={{ backgroundColor: "white" }}
                ></div>
                <h2>Software Engineer </h2>
                <div className={styles.tag}>
                  <p>2020 - 2021</p>
                </div>
                <p>Vamonos.pk, Remote, Karachi</p>
                <ul>
                  <li>
                    Lead in the design, development, and implementation of the
                    graphic, layout, and production communication materials{" "}
                  </li>
                  <li>
                    Delegate tasks to the 7 members of the design team and
                    provide counsel on all aspects of the project.
                  </li>
                  <li>
                    {" "}
                    Supervise the assessment of all graphic materials in order
                    to ensure quality and accuracy of the design
                  </li>
                  <li>
                    Oversee the efficient use of production project budgets
                    ranging from $2,000 - $25,000
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
