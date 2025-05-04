import Feather from '@expo/vector-icons/Feather';
import * as SecureStore from "expo-secure-store";
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type TodoItem = {
  id: number;
  name: string;
  priorityLevel: string;
  isCompleted: boolean;
  date: number;
}


const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    const storedTodos = SecureStore.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos):[];
    []});
  const [changingTodoId, setChangingTodoId] =useState<number | null>(null);
  const [editedName, setEditedName] = useState("");

  //Add edit todo

  const handleTodoAdd = async () => {
    if(!todo.trim()) return;
    const newTodo = {
      id: Math.random(),
      name: todo,
      priorityLevel: "Low",
      isCompleted: false,
      date: new Date().getTime(),
    };
    setTodos([...todos, newTodo]); //spread the content of 'todos' array and add the newTodo
    //... is called the "spread operator"
    await SecureStore.setItemAsync("todos", JSON.stringify([...todos, newTodo]));
    setTodo("");
  };

  //All your logic should come before the return statement

  //function to handle priority level color
  const handlePriorityLevel = (priority: string) => {
    switch(priority){
      case "Low":
        return "green";
      case "Medium":
        return "yellow"
      case "High":
        return "red"
    }
  }

  //expo-secure-store
  //when building a real-world app, request for faceID permission

  const handleNewTodoName = (id: number) => {
    const changingTodoItem = todos.map((item) => {
      if (item.id === id){
        return {...item, name:editedName};
      }
      return item;
    });
    setTodos(changingTodoItem);
    setChangingTodoId(null);
    setEditedName("");
  }


  const deleteTodoItem = (id: number) => {
    const filteredTodos = todos.filter((item) => item.id !== id)
    setTodos(filteredTodos)
    
  }

  return (
    <SafeAreaView
      style={{flex:1, paddingHorizontal:20, backgroundColor: "white"}}
    >
      <TextInput
        value={todo}
        onChangeText={(text) => setTodo(text)}
        placeholder="Enter todo item"
        style={{
          borderWidth: 1,
          padding: 20,
          borderRadius: 10,
          borderColor: "gray",
          fontSize: 18,
          marginTop: 10
        }}
      />
      <TouchableOpacity onPress={() => handleTodoAdd()}>
        <Text
          style={{
            backgroundColor: "#007AFF",
            color: "white",
            padding: 10,
            borderRadius: 10,
            textAlign: "center",
            fontSize: 18,
            marginTop: 20
          }}
        >
          Add Todo
        </Text>
      </TouchableOpacity>

      <View style={{marginVertical:10}}>
        {todos.map((item) => (
          <View key={item.id} style={{flexDirection: 'row', justifyContent:"space-between", alignItems:"center"}}>
            <View >
              <View>{changingTodoId === item.id?
                <TextInput
                  placeholder={item.name}
                  onChangeText={(text) => setEditedName(text)}
                  // value={editedName}
                  style={{padding: 0}} />
                :<Text>{item.name}</Text>
              }</View>
              <Text style={{color:handlePriorityLevel(item.priorityLevel)}}>{item.priorityLevel}</Text>
            </View>
            <View style={{flexDirection:"row", gap:7}}>
              {/* onPress={() =>editTodoItem(item.name)} */}

              {changingTodoId === item.id? (
                <Feather
                  onPress={() => {
                  handleNewTodoName(item.id);
                }}
                  name="check"
                  size={20}
                  color="black" />
              ) : (
                <Feather
                  onPress={() =>{
                    setChangingTodoId(item.id);
                  }}
                  name="edit"
                  size={20}
                  color="black" />
              )}
              <Feather onPress={() => deleteTodoItem(item.id)} name="trash" color="#EE4B2B" size={20}/>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default TodoList;








//What I tried

// import Feather from '@expo/vector-icons/Feather';
// import React, { useState } from 'react';
// import { Text, TextInput, TouchableOpacity, View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// type TodoItem = {
//   id: number;
//   name: string;
//   priorityLevel: string;
//   isCompleted: boolean;
//   date: number;
// }


// const TodoList = () => {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState<TodoItem[]>([]);
//   const [changeTodo, SetChangeTodo] =useState(false);

//   //Add edit todo

//   const handleTodoAdd = () => {
//     const newTodo = {
//       id: Math.random(),
//       name: todo,
//       priorityLevel: "Low",
//       isCompleted: false,
//       date: new Date().getTime(),
//     };
//     setTodos([...todos, newTodo]); //spread the content of 'todos' array and add the newTodo
//     //... is called the "spread operator"
//     setTodo("")
//   };

//   //All your logic should come before the return statement

//   //function to handle priority level color
//   const handlePriorityLevel = (priority: string) => {
//     switch(priority){
//       case "Low":
//         return "green";
//       case "Medium":
//         return "yellow"
//       case "High":
//         return "red"
//     }
//   }

//   const handleNewTodoName = (name:string, itemName:string, editTodoName:Function) => {
//     if (name === "check"){
//       const item_name = itemName.replace(itemName, editTodoName)
//       return item_name;
//     }
//   }

//   console.log(item_name)
//   const editTodoName = (text: string) => {
//     const editedTodoName = text;
//     return editedTodoName;
//   }

//   const deleteTodoItem = (id: number) => {
//     const filteredTodos = todos.filter((item) => item.id !== id)
//     setTodos(filteredTodos)
//   }

//   return (
//     <SafeAreaView
//       style={{flex:1, paddingHorizontal:20, backgroundColor: "white"}}
//     >
//       <TextInput
//         value={todo}
//         onChangeText={(text) => setTodo(text)}
//         placeholder="Enter todo item"
//         style={{
//           borderWidth: 1,
//           padding: 20,
//           borderRadius: 10,
//           borderColor: "gray",
//           fontSize: 18,
//           marginTop: 10
//         }}
//       />
//       <TouchableOpacity onPress={() => handleTodoAdd()}>
//         <Text
//           style={{
//             backgroundColor: "#007AFF",
//             color: "white",
//             padding: 10,
//             borderRadius: 10,
//             textAlign: "center",
//             fontSize: 18,
//             marginTop: 20
//           }}
//         >
//           Add Todo
//         </Text>
//       </TouchableOpacity>

//       <View style={{marginVertical:10}}>
//         {todos.map((item) => (
//           <View key={item.id} style={{flexDirection: 'row', justifyContent:"space-between", alignItems:"center"}}>
//             <View >
//               <View>{!changeTodo?
//                 <Text>{item.name}</Text>
//                 :
//                 <TextInput onChangeText={(text) => editTodoName(text)} style={{padding: 0}} placeholder={item.name}/>
//               }</View>
//               <Text style={{color:handlePriorityLevel(item.priorityLevel)}}>{item.priorityLevel}</Text>
//             </View>
//             <View style={{flexDirection:"row", gap:7}}>
//               {/* onPress={() =>editTodoItem(item.name)} */}
//               <Feather
//                 onPress={() => {
//                   SetChangeTodo(!changeTodo);
//                   handleNewTodoName(Feather.name, item.name, editTodoName);
//                   SetChangeTodo(!changeTodo)
//                 }}
//                 name={!changeTodo ? "edit":"check"}
//                 size={20}
//                 color="black" />
//               <Feather onPress={() => deleteTodoItem(item.id)} name="trash" color="#EE4B2B" size={20}/>
//             </View>
//           </View>
//         ))}
//       </View>
//     </SafeAreaView>
//   )
// }

// export default TodoList;