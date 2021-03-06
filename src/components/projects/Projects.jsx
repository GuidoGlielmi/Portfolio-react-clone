import React, { useContext, useEffect, useState } from 'react';
import { InfoContext } from 'App';
import styles from './Projects.module.css';
import ProjectItem from './ProjectItem';
import ProjectForm from 'components/forms/projects/ProjectForm';
import Button from 'components/button/Button';
import LoadingIcon from 'components/loading-icon/LoadingIcon';
export default function Projects() {
  const projects = useContext(InfoContext).projects;
  const loggedIn = useContext(InfoContext).loggedIn;

  const [showNewForm, setShowNewForm] = useState(false);

  useEffect(() => !loggedIn && setShowNewForm(false), [loggedIn]);

  return (
    <section className={styles.projectsSection}>
      <div className={styles.titleContainer}>
        <p className={`${styles.title} textShadowLight`}>Projects i've worked on</p>
      </div>
      <div className={styles.projects}>
        {projects ? (
          projects.map((p, i) => <ProjectItem p={p} i={i} key={p.id} />)
        ) : (
          <LoadingIcon />
        )}
      </div>
      {showNewForm && <ProjectForm />}
      {loggedIn && (
        <div onClick={() => setShowNewForm(!showNewForm)} className={styles.addButton}>
          <Button>Add project</Button>
        </div>
      )}
    </section>
  );
}
