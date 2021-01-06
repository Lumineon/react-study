import React, {cloneElement} from 'react';
// import FamilyMember from './FamilyMembers';

export default props => {
  return (
    <div>
      
      {/* Método quando você tem acesso diretamente aos componentes filhos */}

      {/* <FamilyMember name="Joao" {...props}/>
      <FamilyMember name="Ana" {...props} />
      <FamilyMember name="Gustavo" lastName={props.lastName}/> */}

      {/* Método quando você não tem acesso diretamente aos componentes filhos, 
      somente tendo acesso a props.children */}

      {/* {React.Children.map(props.children, (child) => {
        return cloneElement(child, {...props})
      })} */}

      {/* Método mais limpo que o acima */}

      {props.children.map((child, i) => {
        return cloneElement(child, {...props, key: i})
      })}
    </div>
  );
}