import { FiGift } from 'react-icons/fi'
import Button from '../../ui/button';
function Subscription({ className }) {
    return (
        <div className={`bg-skyBlue p-[20px] rounded-theme text-white lg:ml-[16px] ${className || ''}`}>
            <div className="flex items-center mb-[13px] justify-between">
                <FiGift className="text-[24px]" />
                <span>Subscribe to Premium</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-[30px]">
                    $8<small className="text-[15px]">/m</small>
                </span>
                <Button
                    size='lg'
                    rounded={true}
                >
                    Upgrade
                </Button>
            </div>
        </div>
    );
}

export default Subscription;