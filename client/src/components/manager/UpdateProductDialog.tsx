import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    FormControl,
    FormControlLabel,
    IconButton,
    InputLabel,
    Switch,
    TextField,
    Tooltip,
    Typography,
} from '@mui/material';
import { CreateProduct, ProductProps } from 'models';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { updateProduct } from 'redux/actions';
// @ts-ignore
import FileBase from 'react-file-base64';
import { DialogGroupButton } from 'components';
import { Edit } from '@mui/icons-material';

export const UpdateProductDialog = ({ product }: ProductProps) => {
    const [state, setState] = useState({
        open: false,
        product: product,
    });
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleOpen = () => {
        setState({ ...state, open: !state.open });
    };

    const handleSubmit = () => {
        dispatch(
            updateProduct(
                state.product._id,
                state.product as unknown as CreateProduct,
            ),
        );
    };

    return (
        <div>
            <Tooltip title={t('pages.inventory.actions.updateProduct')}>
                <IconButton onClick={handleOpen}>
                    <Edit />
                </IconButton>
            </Tooltip>
            <Dialog open={state.open} onClose={handleOpen} maxWidth="xs">
                <DialogTitle
                    sx={{ backgroundColor: '#001D6E', color: 'white' }}
                >
                    {t('forms.product.update')}
                </DialogTitle>
                <DialogContent
                    sx={{ backgroundColor: '#DEE5E9', color: '#001D6E' }}
                >
                    <Box
                        sx={{
                            pt: 2,
                            border: '5px solid',
                            borderColor: '#DEE5E9 #E6001F #DEE5E9 #001D6E',
                            borderRadius: 5,
                        }}
                    >
                        <TextField
                            type="text"
                            label={t('forms.product.fields.name')}
                            required
                            value={state.product.name}
                            fullWidth
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    product: {
                                        ...state.product,
                                        name: e.target.value,
                                    },
                                })
                            }
                            variant="filled"
                            sx={{ mb: 4 }}
                        />
                        <InputLabel sx={{ ml: 1 }}>
                            {t('forms.product.fields.image')}
                        </InputLabel>
                        <FormControl fullWidth sx={{ mb: 4 }}>
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }: { base64: any }) =>
                                    setState({
                                        ...state,
                                        product: {
                                            ...state.product,
                                            image: base64,
                                        },
                                    })
                                }
                            />
                        </FormControl>
                        <TextField
                            type="text"
                            label={t('forms.product.fields.description')}
                            required
                            value={state.product.description}
                            multiline
                            fullWidth
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    product: {
                                        ...state.product,
                                        description: e.target.value,
                                    },
                                })
                            }
                            variant="filled"
                            sx={{ mb: 4 }}
                        />
                        <TextField
                            type="number"
                            label={t('forms.product.fields.price')}
                            required
                            value={state.product.price}
                            fullWidth
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    product: {
                                        ...state.product,
                                        price: parseFloat(e.target.value),
                                    },
                                })
                            }
                            variant="filled"
                            sx={{ mb: 4 }}
                        />
                        <TextField
                            type="text"
                            label={t('forms.product.fields.madeIn')}
                            required
                            value={state.product.madeIn}
                            fullWidth
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    product: {
                                        ...state.product,
                                        madeIn: e.target.value,
                                    },
                                })
                            }
                            variant="filled"
                            sx={{ mb: 4 }}
                        />
                        <FormControlLabel
                            label={
                                <Typography fontWeight={'bolder'}>
                                    {t(
                                        `forms.product.fields.${
                                            state.product.available
                                                ? 'available'
                                                : 'unavailable'
                                        }`,
                                    )}
                                </Typography>
                            }
                            control={
                                <Switch
                                    checked={state.product.available}
                                    value={state.product.available}
                                    onChange={() =>
                                        setState({
                                            ...state,
                                            product: {
                                                ...state.product,
                                                available:
                                                    !state.product.available,
                                            },
                                        })
                                    }
                                />
                            }
                            sx={{
                                color: state.product.available
                                    ? 'green'
                                    : 'red',
                            }}
                        />
                        <FormControlLabel
                            label={
                                <Typography fontWeight={'bolder'}>
                                    {t(
                                        `forms.product.fields.${
                                            state.product.returnable
                                                ? 'returnable'
                                                : 'unreturnable'
                                        }`,
                                    )}
                                </Typography>
                            }
                            control={
                                <Switch
                                    checked={state.product.returnable}
                                    value={state.product.returnable}
                                    onChange={() =>
                                        setState({
                                            ...state,
                                            product: {
                                                ...state.product,
                                                returnable:
                                                    !state.product.returnable,
                                            },
                                        })
                                    }
                                />
                            }
                            sx={{
                                color: state.product.returnable
                                    ? 'green'
                                    : 'red',
                            }}
                        />
                    </Box>
                </DialogContent>
                <DialogGroupButton
                    handleClick={handleSubmit}
                    handleCancel={handleOpen}
                    actionText={t('common.update')}
                    cancelText={t('common.cancel')}
                />
            </Dialog>
        </div>
    );
};
