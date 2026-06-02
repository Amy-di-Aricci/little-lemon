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
			data-testid="unsaved-changes-dialog"
			aria-labelledby="unsaved-changes-dialog-title"
			aria-describedby="unsaved-changes-dialog-description"
		>
			<DialogContent>
				<DialogTitle sx={{ p: 0 }} id="unsaved-changes-dialog-title">
					Unsaved changes
				</DialogTitle>
				<DialogContentText id="unsaved-changes-dialog-description">
					You have unsaved changes. Are you sure you want to leave this step and
					discard them?
				</DialogContentText>
			</DialogContent>
			<DialogActions
				sx={{
					padding: 2,
				}}
			>
				<Button data-testid="cancel-button" onClick={onDiscard} autoFocus>
					Cancel
				</Button>
				<Button data-testid="accept-button" onClick={onAccept}>
					Discard changes
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default UnsavedChangesDialog;
