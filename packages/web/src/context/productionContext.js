import axios from "axios";
import React, { useState } from "react";
const ProductionContext = React.createContext();

const SERVER = "http://localhost:4000";

function ProductionProvider(props) {
  const [productions, setProductions] = useState([]);
  const [production, setProduction] = useState([]);
  const [shot, setShot] = useState([]);
  const [scene, setScene] = useState([]);
  const [shotsFromAScene, setShotsFromAScene] = useState([]);

  function getAllProductions() {
    axios
      .get(`${SERVER}/productions/`)
      .then(response => {
        setProductions(response.data);
      })
      .catch(err => console.log(err.response.data.errMessage));
  }
  function getAProduction(productionId) {
    axios
      .get(`/productions/${productionId}`)
      .then(response => {
        setProduction(response.data);
      })
      .catch(err => console.log(err.response.data.errMessage));
  }
  function addAProduction(newProduction) {
    axios.post(`/productions/`).then(response => {
      const addedProduction = response.data;
      setProductions(prev => [...prev, addedProduction]);
    });
  }
  function editAProduction(productionId, edits) {
    axios.put(`/productions/${productionId}`).then(response => {
      const updatedArray = productions.map(production => {
        if (production._id === productionId) {
          return response.data;
        } else {
          return production;
        }
      });
      setProductions(updatedArray);
    });
  }
  function deleteAProduction(productionId) {
    axios.delete(`productions/${productionId}`).then(() => {
      const updatedArray = productions.filter(
        production => production._id !== productionId
      );
      setProductions(updatedArray);
    });
  }
  function getAScene(sceneId) {
    axios
      .get(`/scenes/${sceneId}`)
      .then(response => {
        setScene(response.data);
      })
      .catch(err => console.log(err.response.data.errMessage));
  }
  function addAScene(productionId, newScene) {
    axios.put(`/productions/${productionId}/addScene`).then(response => {
      const updatedArray = productions.map(production => {
        if (production._id === productionId) {
          return response.data;
        } else {
          return production;
        }
      });
      setProductions(updatedArray);
    });
  }
  function editAScene(sceneId, edits) {
    axios.put(`/scenes/${sceneId}`).then(response => {
      const updatedArray = productions.scenes.map(scene => {
        if (scene._id === sceneId) {
          return response.data;
        } else {
          return scene;
        }
      });
      setProduction(prev => ({ ...prev, scenes: updatedArray }));
      setScene(response.data);
    });
  }
  function deleteAScene(productionId, sceneId) {
    axios
      .put(`productions/${productionId}/${sceneId}/removeScene`)
      .then(response => {
        const updatedArray = productions.map(production => {
          if (production._id === productionId) {
            return response.data;
          } else {
            return production;
          }
        });
        setProductions(updatedArray);
      });
    axios.delete(`scenes/${sceneId}`).then(() => {
      setScene({});
    });
  }
  function getAShot(shotId) {
    axios
      .get(`/shots/${shotId}/`)
      .then(response => {
        setShot(response.data);
      })
      .catch(err => console.log(err.response.data.errMessage));
  }
  function addAShot(productionId, sceneId, newScene) {
    axios
      .put(`/productions/${productionId}/${sceneId}addShot`, newScene)
      .then(response => {
        const updatedArray = productions.map(production => {
          if (production._id === productionId) {
            return response.data;
          } else {
            return production;
          }
        });
        setProductions(updatedArray);
      });
  }
  function editAShot(shotId, edits) {
    axios.put(`/shots/${shotId}`).then(response => {
      const updatedArray = productions.shots.map(shot => {
        if (shot._id === shotId) {
          return response.data;
        } else {
          return shot;
        }
      });
      setProduction(prev => ({ ...prev, shots: updatedArray }));
      setShot(response.data);
    });
  }
  function deleteAShot(productionId, shotId) {
    axios
      .put(`productions/${productionId}/${shotId}/removeShot`)
      .then(response => {
        const updatedArray = productions.map(production => {
          if (production._id === productionId) {
            return response.data;
          } else {
            return production;
          }
        });
        setProductions(updatedArray);
      });
    axios.delete(`shots/${shotId}`).then(() => {
      setShot({});
    });
  }
  function addANewPerson(productionId, newPerson) {
    axios
      .put(`/productions/${productionId}/$addPerson`, newPerson)
      .then(response => {
        const updatedArray = productions.map(production => {
          if (production._id === productionId) {
            return response.data;
          } else {
            return production;
          }
        });
        setProductions(updatedArray);
      });
  }
  function addAnExistingPerson(productionId, personId, existingPerson) {
    axios
      .put(`/productions/${productionId}/${personId}addPerson`, existingPerson)
      .then(response => {
        const updatedArray = productions.map(production => {
          if (production._id === productionId) {
            return response.data;
          } else {
            return production;
          }
        });
        setProductions(updatedArray);
      });
  }
  function editAPerson(personId, edits) {
    axios.put(`/people/${personId}`, edits).then(response => {
      const updatedArray = productions.people.map(person => {
        if (person._id === personId) {
          return response.data;
        } else {
          return person;
        }
      });
      setProduction(prev => ({ ...prev, people: updatedArray }));
    });
  }
  function removeAPerson(productionId, personId) {
    axios
      .delete(`productions/${productionId}/${personId}/removePerson`)
      .then(response => {
        const updatedArray = productions.map(production => {
          if (production._id === productionId) {
            return response.data;
          } else {
            return production;
          }
        });
        setProductions(updatedArray);
      });
  }
  function deleteAPerson(personId) {
    axios.delete(`people/${personId}`);
  }
  function getShots(sceneId) {
    axios
      .get(`/shots/${sceneId}/shots`)
      .then(response => {
        setShotsFromAScene(response.data);
      })
      .catch(err => console.log(err.response.data.errMessage));
  }

  return (
    <ProductionContext.Provider
      value={{
        productions,
        production,
        shotsFromAScene,
        scene,
        shot,
        getAllProductions,
        getAProduction,
        addAProduction,
        editAProduction,
        deleteAProduction,
        getAScene,
        addAScene,
        editAScene,
        deleteAScene,
        getAShot,
        getShots,
        addAShot,
        editAShot,
        deleteAShot,
        addANewPerson,
        addAnExistingPerson,
        editAPerson,
        removeAPerson,
        deleteAPerson,
      }}
    >
      {props.children}
    </ProductionContext.Provider>
  );
}

export { ProductionProvider, ProductionContext };
