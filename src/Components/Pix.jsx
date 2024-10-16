import React, { useEffect, useState } from "react";

function Pix() {
    const [api, setApi] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        // Load default images when the component mounts
        const loadDefaultImages = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://pixabay.com/api/?key=46193712-1f18297726894278411dc5778&q=landscape&image_type=photo&pretty=true`);
                const data = await response.json();
                setApi(data.hits);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadDefaultImages();
    }, []);

    useEffect(() => {
        if (!search) return;

        setLoading(true);
        setError("");

        fetch(`https://pixabay.com/api/?key=46193712-1f18297726894278411dc5778&q=${search}&image_type=photo&pretty=true`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch images");
                }
                return response.json();
            })
            .then(data => {
                setApi(data.hits);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [search]);

    return (
        <div className="outDiv">
            <div className="inDiv">
                <input
                    type="text"
                    placeholder="Search here..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="images">
                <div className="inImages">
                    {api.map((x) => (
                        <img key={x.id} src={x.webformatURL} alt={x.tags} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Pix;
