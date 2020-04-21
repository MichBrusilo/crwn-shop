import React from 'react';
import './collection-prewiew.styles.scss';

const CollectionsPrewiew = ({ title, items }) => (
    <div className="collection-prewiew">
        <h1 className="title">{title.toUpperCase()}</h1>
        
        <div className="preview">
            {items.filter((item, inx) => inx <4).map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    </div>
);

export default CollectionsPrewiew;

// import React from 'react';
// import './collection-preview.styles.scss';

// const CollectionPreview = ({ title, items }) => (
//   <div className='collection-preview'>
//     <h1 className='title'>{title.toUpperCase()}</h1>
//     <div className='preview'>
//       {items
//         .filter((item, idx) => idx < 4)
//         .map(({ id, ...otherItemProps }) => (
//             <div key={item.id}>{item.name}</div>
//         ))}
//     </div>
//   </div>
// );

// export default CollectionPreview;