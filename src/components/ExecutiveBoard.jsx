import React, { useState, useEffect } from 'react';
import '../styles/ExecutiveBoard.css';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';
import Title from './Title';
import FadeInSection from './FadeInWrapper';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const storage = getStorage();
      const firestore = getFirestore();
      const teamMembersCollection = collection(firestore, 'eb-profiles');
      const q = query(teamMembersCollection, orderBy("prio", "asc")); // Order by "prio" ascending
      const teamMembersSnapshot = await getDocs(q);

      const updatedTeamMembers = await Promise.all(
        teamMembersSnapshot.docs.map(async (doc) => {
          const member = { id: doc.id, ...doc.data() };
          const storageRef = ref(storage, `eb-profiles/${doc.id}.png`);
          const downloadURL = await getDownloadURL(storageRef);
          return { ...member, imgUrl: downloadURL };
        })
      );

      setTeamMembers(updatedTeamMembers);
    };

    fetchTeamMembers();
  }, []);

  return (
    <section className='our__team' id='eb'>
      <Title subTitle="Executive Board" title="Meet Our Leaders" id="eb" />
      <div className='container'>
        <div className='team__wrapper'>
          {teamMembers.map((item, index) => (
            <FadeInSection delay={0.4}>
              <div className='team__item' key={index}>
                <div className='team__img'>
                  <img src={item.imgUrl} alt={item.name} />
                </div>
                <div className='team__details'>
                  <h4>{item.name}</h4>
                  <p className='position'>{item.title}</p> 
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
