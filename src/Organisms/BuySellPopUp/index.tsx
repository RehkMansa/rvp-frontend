import VanillaButton from '@/Atoms/VanillaButton';
import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import './index.css';
import { useState } from 'react';
import BuySellTab from '../BuySellTab';
const BuySellPopUp = () => {
	const [open, setOpen] = useState(false);

	const slideInUpVariants = {
		hidden: { y: '100%', opacity: 0 },
		visible: { y: 0, opacity: 1 },
	};

	const slideOutDownVariants = {
		hidden: { y: 0, opacity: 1 },
		visible: { y: '100%', opacity: 0 },
	};

	const slideInOutTransition = {
		duration: 0.3,
	};
	return (
		<div className="bs-wrapper">
			<Dialog.Root onOpenChange={(val) => setOpen(val)} open={open}>
				<Dialog.Trigger asChild>
					<div className="bs-popup-trigger">
						<VanillaButton>Buy</VanillaButton>
						<VanillaButton variant="red">Sell</VanillaButton>
					</div>
				</Dialog.Trigger>
				<Dialog.Portal>
					<Dialog.Overlay className="bs-popup-overlay bs-wrapper" />
					<Dialog.Content
						asChild
						className="bs-popup-content bs-wrapper"
					>
						<motion.div
							initial="hidden"
							animate={open ? 'visible' : 'hidden'}
							variants={
								open ? slideInUpVariants : slideOutDownVariants
							}
							transition={slideInOutTransition}
						>
							<div>
								<BuySellTab />
							</div>
						</motion.div>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</div>
	);
};

export default BuySellPopUp;
