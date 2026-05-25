import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	Button,
	DialogTitle,
} from "@mui/material";

function UnsavedChangesDialog({ open, onDiscard, onAccept }) {
	return (
		<Dialog
			open={open}
			onClose={onDiscard}
			aria-labelledby="unsaved-changes-dialog-title"
			aria-describedby="unsaved-changes-dialog-description"
		>
			<DialogContent>
				<DialogTitle sx={{ p: 0 }} id="unsaved-changes-dialog-title">
					Unsaved changes
				</DialogTitle>
				<DialogContentText id="unsaved-changes-dialog-description">
					You have some unsaved changes. Do you want to discard them and
					proceed?
				</DialogContentText>
			</DialogContent>
			<DialogActions
				sx={{
					padding: 2,
				}}
			>
				<Button onClick={onDiscard} autoFocus>
					Cancel
				</Button>
				<Button onClick={onAccept}>Proceed</Button>
			</DialogActions>
		</Dialog>
	);
}

export default UnsavedChangesDialog;
