import React, { useState } from "react";

function MetaInformation() {
  return (
    <div className="IntroductionSection">
      <h1 className="HeaderForIntroduction">Introduction</h1>
      <p className="IntroductionText">
        This webpage is developed in React designed to be an overview of a
        workout. After completion of an exercise one can mark that exercise done
        by clicking it. Furthormore exercises can be added and editet. Source
        code available at{" "}
        <a href="https://github.com/Frosendal/Personal-Projects">my github</a>
      </p>
    </div>
  );
}

function ExerciseTable() {
  //Userinput
  const [exerciseName, setExerciseName] = useState("");
  const [numberOfReps, setReps] = useState("");
  const [numberOfKilos, setKilos] = useState("");

  //Data with default
  const [exerciseData, setExerciseData] = useState([
    { reps: 10, kilo: 10, name: "Deadlift" },
    { reps: 10, kilo: 10, name: "Squat" },
    { reps: 10, name: "Pushups" }
  ]);

  return (
    <div>
      {MetaInformation()}
      <div className="Header">
        <h1>Workout Plan</h1>
      </div>
      <form className="panel">
        <input
          type="text"
          value={exerciseName}
          onChange={event => setExerciseName(event.target.value)}
          placeholder="Name of exercise"
        ></input>
        <input
          type="text"
          value={numberOfReps}
          onChange={event => setReps(event.target.value)}
          placeholder="number of reps"
        ></input>
        <input
          type="text"
          value={numberOfKilos}
          onChange={event => setKilos(event.target.value)}
          placeholder="kilos (optinal)"
        ></input>
        <button type="button" onClick={handleSubmit}>
          Add Exercise
        </button>
      </form>
      {renderExercises()}
    </div>
  );

  function renderExercises() {
    return (
      <div>
        {exerciseData.map(index => (
          <ExerciseBlock
            name={index.name}
            reps={index.reps}
            kilos={index.kilo}
            delete={() => handleDelete(index.name)}
            edit={() => handleEdit(index.name)}
          />
        ))}
      </div>
    );
  }

  function handleDelete(name) {
    const element = [...exerciseData];
    var index = element.findIndex(function(exerciseData, index) {
      return exerciseData.name === name;
    });
    element.splice(index, 1);
    setExerciseData(element);
  }

  function handleEdit(name) {
    const element = [...exerciseData];
    var index = element.findIndex(function(exerciseData, index) {
      return exerciseData.name === name;
    });
    //Korrekt override?
    element[index].name = exerciseName;
    element[index].reps = numberOfReps;
    element[index].kilo = numberOfKilos;
    setExerciseData(element);
  }

  function handleSubmit() {
    const element = exerciseData.concat({
      reps: numberOfReps,
      kilo: numberOfKilos,
      name: exerciseName
    });
    setExerciseName("");
    setReps("");
    setKilos("");
    setExerciseData(element);
  }
}

function ExerciseBlock(props) {
  var green = "#00FF00";
  var red = "#FF0000";
  const [color, setColor] = useState(green);
  const [selectValue, setSelect] = useState("...");

  function switchColor() {
    var newColor = color === green ? red : green;
    setColor(newColor);
  }

  function renderKilo() {
    if (props.kilos > 0) {
      return <p style={{ fontSize: 25 }}>Kilos: {props.kilos}</p>;
    }
  }

  function renderOptions() {
    if (selectValue === "Delete") {
      setSelect("...");
      props.delete(props.name);
    }
    if (selectValue === "Edit") {
      setSelect("...");
      props.edit(props.name);
    }

    return (
      <select
        className="selectbox"
        value={selectValue}
        onChange={handleOptionChange}
      >
        <option defaultValue value="...">
          ...
        </option>
        <option value="Delete">Delete</option>
        <option value="Edit">Edit</option>
        {handleOptionChange}
      </select>
    );
  }

  function handleOptionChange(event) {
    if (event !== undefined) {
      setSelect(event.target.value);
    }
  }

  return (
    <div>
      <button
        className="ExerciseBlock"
        type="button"
        onClick={switchColor}
        style={{ backgroundColor: color }}
      >
        <p style={{ fontSize: 25 }}>Exercise name: {props.name}</p>
        <p style={{ fontSize: 25 }}>Number of reps: {props.reps}</p>
        {renderKilo()}
        {renderOptions()}
      </button>
    </div>
  );
}

export default ExerciseTable;
