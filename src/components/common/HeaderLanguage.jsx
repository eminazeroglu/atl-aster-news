import { useDispatch } from 'react-redux';
import { setLanguage, useStoreApp } from '../../store/app';
import Dropdown from '../ui/dropdown';

function HeaderLanguage() {

    const dispatch = useDispatch();
    const {language} = useStoreApp();

    const languages = [
        { key: 'az', name: 'Az'},
        { key: 'en', name: 'En'},
    ];

    const findLang = languages.find(i => i.key === language);

    const handleItemClick = (item) => {
        dispatch(setLanguage(item.key))
    }

    return (
        <Dropdown
            items={languages}
            onItemClick={handleItemClick}
            dropdownClass={'!w-auto'}
        >
            <span className="flex items-center space-x-[13px]">
                <span>{findLang.name}</span>
            </span>
        </Dropdown>
    );
}

export default HeaderLanguage;